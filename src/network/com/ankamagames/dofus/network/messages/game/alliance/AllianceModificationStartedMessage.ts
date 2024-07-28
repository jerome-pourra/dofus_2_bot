import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";
import { BooleanByteWrapper } from "./../../../../../jerakine/network/utils/BooleanByteWrapper";

export class AllianceModificationStartedMessage extends NetworkMessage
{

	public static readonly protocolId: number = 2149;

	public canChangeName: boolean = false;
	public canChangeTag: boolean = false;
	public canChangeEmblem: boolean = false;

    public constructor()
    {
        super();
    }

    public override pack(output: ICustomDataOutput)
    {

    }

    public override unpack(input: ICustomDataInput, length: number)
    {
        this.deserialize(input);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_AllianceModificationStartedMessage(input);
    }

    public deserializeByteBoxes(input: ICustomDataInput)
    {
        let _box0: number = input.readByte();
        this.canChangeName = BooleanByteWrapper.getFlag(_box0,0);
        this.canChangeTag = BooleanByteWrapper.getFlag(_box0,1);
        this.canChangeEmblem = BooleanByteWrapper.getFlag(_box0,2);
    }

    private deserializeAs_AllianceModificationStartedMessage(input: ICustomDataInput)
    {
        this.deserializeByteBoxes(input);
    }

}