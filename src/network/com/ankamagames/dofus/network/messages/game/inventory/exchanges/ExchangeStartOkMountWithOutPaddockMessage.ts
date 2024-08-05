import { MountClientData } from "./../../../../types/game/mount/MountClientData";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class ExchangeStartOkMountWithOutPaddockMessage extends NetworkMessage
{

	public static readonly protocolId: number = 1232;

	public stabledMountsDescription: Array<MountClientData>;

    public constructor()
    {
        super();
        this.stabledMountsDescription = Array<MountClientData>();
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
        this.deserializeAs_ExchangeStartOkMountWithOutPaddockMessage(input);
    }

    private deserializeAs_ExchangeStartOkMountWithOutPaddockMessage(input: ICustomDataInput)
    {
        let _item1: MountClientData;
        let _stabledMountsDescriptionLen: number = input.readUnsignedShort();
        for(let _i1: number = 0; _i1 < _stabledMountsDescriptionLen; _i1++)
        {
            _item1 = new MountClientData();
            _item1.deserialize(input);
            this.stabledMountsDescription.push(_item1);
        }
    }

}