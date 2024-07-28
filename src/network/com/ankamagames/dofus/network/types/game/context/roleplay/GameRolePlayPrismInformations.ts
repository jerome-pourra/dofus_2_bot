import { EntityDispositionInformations } from "./../EntityDispositionInformations";
import { EntityLook } from "./../../look/EntityLook";
import { PrismInformation } from "./../../prism/PrismInformation";
import { ProtocolTypeManager } from "./../../../../ProtocolTypeManager";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";
import { GameRolePlayActorInformations } from "./GameRolePlayActorInformations";

export class GameRolePlayPrismInformations extends GameRolePlayActorInformations
{

	public static readonly protocolId: number = 7369;

	public prism: PrismInformation;

    public constructor()
    {
        super();
        this.prism = new PrismInformation();
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GameRolePlayPrismInformations(input);
    }

    private deserializeAs_GameRolePlayPrismInformations(input: ICustomDataInput)
    {
        super.deserialize(input);
        let _id1: number = input.readUnsignedShort();
        this.prism = ProtocolTypeManager.getInstance(PrismInformation,_id1);
        this.prism.deserialize(input);
    }

}