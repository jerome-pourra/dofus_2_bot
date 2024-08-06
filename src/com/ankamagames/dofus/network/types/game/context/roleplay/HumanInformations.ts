import { ActorRestrictionsInformations } from "./../../character/restriction/ActorRestrictionsInformations";
import { ProtocolTypeManager } from "./../../../../ProtocolTypeManager";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";
import { HumanOption } from "./HumanOption";

export class HumanInformations implements INetworkType
{

	public static readonly protocolId: number = 495;

	public restrictions: ActorRestrictionsInformations;
	public sex: boolean = false;
	public options: Array<HumanOption>;

    public constructor()
    {
        this.restrictions = new ActorRestrictionsInformations();
        this.options = Array<HumanOption>();
    }

    public getTypeId()
    {
        return HumanInformations.protocolId;
    }

    public initHumanInformations(restrictions: ActorRestrictionsInformations = null, sex: boolean = false, options: Array<HumanOption> = null): HumanInformations
    {
        this.restrictions = restrictions;
        this.sex = sex;
        this.options = options;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_HumanInformations(output);
    }

    public serializeAs_HumanInformations(output: ICustomDataOutput)
    {
        this.restrictions.serializeAs_ActorRestrictionsInformations(output);
        output.writeBoolean(this.sex);
        output.writeShort(this.options.length);
        for(var _i3: number = 0; _i3 < this.options.length; _i3++)
        {
            output.writeShort((this.options[_i3] as HumanOption).getTypeId());
            (this.options[_i3] as HumanOption).serialize(output);
        }
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_HumanInformations(input);
    }

    private deserializeAs_HumanInformations(input: ICustomDataInput)
    {
        let _id3: number = 0;
        let _item3: HumanOption;
        this.restrictions = new ActorRestrictionsInformations();
        this.restrictions.deserialize(input);
        this._sexFunc(input);
        let _optionsLen: number = input.readUnsignedShort();
        for(let _i3: number = 0; _i3 < _optionsLen; _i3++)
        {
            _id3 = input.readUnsignedShort();
            _item3 = ProtocolTypeManager.getInstance(HumanOption,_id3);
            _item3.deserialize(input);
            this.options.push(_item3);
        }
    }

    private _sexFunc(input: ICustomDataInput)
    {
        this.sex = input.readBoolean();
    }

}